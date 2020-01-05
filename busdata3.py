from pykafka import KafkaClient
import json
from datetime import datetime
import uuid
import time
from flask import request
from jinja2 import Template
import pymysql

con = pymysql.connect("localhost", "root", "", "sap")

#READ COORDINATES FROM GEOJSON
cur = con.cursor()
cur.execute("SELECT lng, lat FROM bus3")
coordinates = cur.fetchall()


#GENERATE UUID
def generate_uuid():
    return uuid.uuid4()

#KAFKA PRODUCER
client = KafkaClient(hosts="localhost:9092")
topic = client.topics['geodataleaflet']
producer = topic.get_sync_producer()

#CONSTRUCT MESSAGE AND SEND IT TO KAFKA
data = {}
data['busline'] = '00003'

def generate_checkpoint(coordinates):
    i = 0
    while i < len(coordinates):
        data['key'] = data['busline'] + '_' + str(generate_uuid())
        data['timestamp'] = str(datetime.utcnow())
        data['latitude'] = coordinates[i][1]
        data['longitude'] = coordinates[i][0]
        message = json.dumps(data)
        print(message)
        producer.produce(message.encode('ascii'))
        time.sleep(1)

        #if bus reaches last coordinate, start from beginning
        if i == len(coordinates)-1:
           i = 0
        else:
           i += 1

generate_checkpoint(coordinates)
