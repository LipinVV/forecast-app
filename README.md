# Forecast application

#Description:
Full-stack application based on ReactJS / NodeJS / Leaflet / Yandex API / SCSS.
#Features
1. Using Yandex service Weather API and calling to it by Node sever, based on Express;
2. With a certain level of zoom above cities-millionaires appears the weather forecast;
3. If you click at any location, a marker with pop-up with more detailed weather parameters will be shown. If you right-click on this marker - it will disappear (pop-ups from p.2 are not included to this feature);
4. A few markers nearby will compose a marker cluster.

#Deploy:
https://forecast-app-leaflet.herokuapp.com/

#Important: you will need Yandex API key to start this app on your machine, use this link to obtain: https://yandex.ru/dev/weather/doc/dg/concepts/about.html, create .env file in the app and put inside, with name REACT_APP_API_KEY=<you_api_key>.

![image](https://user-images.githubusercontent.com/64662301/169083447-1b9260d7-3106-4ffa-8db5-ee9878c27e6e.png)
