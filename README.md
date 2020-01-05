# liveMaps
 Realtime maps with Kafka, Python, MySQL, and Leaflet.js
 
![alt text](https://github.com/jenizar/liveMaps/blob/master/Screenshot/Screenshot1.PNG)

![alt text](https://github.com/jenizar/liveMaps/blob/master/Screenshot/Screenshot2.PNG)

![alt text](https://github.com/jenizar/liveMaps/blob/master/Screenshot/Screenshot3.PNG)

Guides:
1. Start Zookeeper server

D:\kafka\bin\windows>zookeeper-server-start.bat ../../config/zookeeper.properties

2. Start Kafka server

D:\kafka\bin\windows>kafka-server-start.bat ../../config/server.properties

3. Create topic

D:\kafka\bin\windows>kafka-topics.bat --zookeeper localhost:2181 --topic geodataleaflet --create --partitions 1 --replication-factor 1

4. Check & Verified the topic

D:\kafka\bin\windows>kafka-topics.bat --zookeeper 0.0.0.0:2181 --topic geodataleaflet --describe

5. Start XAMPP server (Apache - MySQL)
6. Create db/table and insert data to MySQL
7. Run app.py
8. Run busdata1.py
9. Run busdata2.py
10. Run busdata3.py

References:
1. https://www.youtube.com/watch?v=vD9Ic8KqEDw
2. https://www.youtube.com/watch?v=wUJJP_8ihAM&t=451s
3. https://github.com/code-and-dogs/liveMaps
4. https://kafka.apache.org/quickstart
5. https://pykafka.readthedocs.io/en/latest/

