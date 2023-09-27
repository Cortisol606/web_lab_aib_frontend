## Отчет к лабораторной номер 1 "HTTP HTTPS и их параметры"

GET запрос 
```
$ curl http://jetbrains.com -i
```  
---

Получили код: 

```
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                > Dload  Upload   Total   Spent    Left  Speed
100   167  100   167    0     0   1925      0 --:--:-- --:--:-- --:--:--  1964HTTP/1.1 301 Moved Permanently
Server: CloudFront
Date: Fri, 15 Sep 2023 17:03:59 GMT
Content-Type: text/html
Content-Length: 167
Connection: keep-alive
Location: https://jetbrains.com/
X-Cache: Redirect from cloudfront
Via: 1.1 16680cb8308307715d75bb3354b1ae38.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: HEL50-C1
Alt-Svc: h3=":443"; ma=86400
X-Amz-Cf-Id: dNtkl5xmjCnFucagLCPLmkQMzEe976jPYZRMUJzOfIFl8JnhsoEF1g==

<html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
<hr><center>CloudFront</center>
</body>
</html>
```

---

```
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--  
  1964HTTP/1.1 301 Moved Permanently - запрашиваемый ресурс на постоянной основе переехал на новый адрес. Тогда новый путь к ресурсу указывается сервером в заголовке Location ответа
Date - дата нашего запроса
Content-Type: text/html - формат, в котором будут передаваться данные в теле запроса или ответа 
Connection: keep-alive - постоянное http соединение
Location: https://jetbrains.com/ - ссылка на сайт, куда мы переходим по коду 301
X-Cache: Redirect from cloudfront - сайт отправил запрос, который содержал ответ с возможностью кэширования
Server: cloudflare - сервер стоит на cloudflare

```
Вывод: 
```
Квест выполнен
```


