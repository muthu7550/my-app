<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="https://jakarta.ee/xml/ns/jakartaee" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd" id="WebApp_ID" version="6.0">
  <display-name>newone1</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.jsp</welcome-file>
    <welcome-file>default.htm</welcome-file>
  </welcome-file-list>
  <servlet>
    <description></description>
    <display-name>newservlet1</display-name>
    <servlet-name>newservlet1</servlet-name>
    <servlet-class>newservlet.newservlet1</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>newservlet1</servlet-name>
    <url-pattern>/newservlet1</url-pattern>
  </servlet-mapping>
</web-app>
