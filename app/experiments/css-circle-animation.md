---
layout: post
title: Css circle animation
categories: experiments
---

I wanted to try illustrative animations in css3 and i gave it a try a while ago. Here is how it goes:

![image](http://cl.ly/image/3e1R3s0S3n1I/mega.jpg)

{% highlight css %}
@-webkit-keyframes turning_cw { 
    0% { -webkit-transform: rotate(0deg) }
    100% { -webkit-transform: rotate(360deg) }
}
@-webkit-keyframes turning_acw { 
    0% { -webkit-transform: rotate(360deg) }
    100% { -webkit-transform: rotate(0deg) }
}
#outer-circle {
    -webkit-box-shadow: 0 0 50px 10px #453D9B;
    border: 10px solid #ECEBFA;
    border-top-color: #746EBB;
    margin: 20% auto;
    text-align: center;
    background: -webkit-gradient( linear, left bottom, left top, color-stop(0.48, #FFFFFF), color-stop(0.49, #ECEBFA), color-stop(0.51, #ECEBFA), color-stop(0.52, #FFFFFF) );
    width: 220px;
    height: 220px;
    -webkit-border-radius: 220px;
    -webkit-animation: turning_cw 5s infinite;
    position: relative;
    opacity: 0.7;
}
#outer-circle:hover {
 -webkit-box-shadow: 0 0 100px 15px #453D9B 
}
#inner-circle {
    border: 10px solid #ECEBFA;
    border-left-color: #746EBB;
    border-right-color: #746EBB;
    -webkit-transform: rotate(360deg);
    position: absolute;
    background: -webkit-gradient( linear, left bottom, left top, color-stop(0.48, #ECEBFA), color-stop(0.49, #746EBB), color-stop(0.51, #746EBB), color-stop(0.52, #ECEBFA) );
    margin: 10px;
    width: 180px;
    height: 180px;
    -webkit-border-radius: 180px;
    -webkit-animation: turning_acw 3s infinite;
}
#center-circle {
    border: 10px solid #746EBB;
    border-bottom-color: #ECEBFA;
    -webkit-transform: rotate(360deg);
    position: absolute;
    background: -webkit-gradient( linear, left bottom, left top, color-stop(0.48, #FFFFFF), color-stop(0.49, #ECEBFA), color-stop(0.51, #ECEBFA), color-stop(0.52, #FFFFFF) );
    margin: 10px;
    width: 140px;
    height: 140px;
    -webkit-border-radius: 140px;
    -webkit-animation: turning_cw 5s infinite;
}
{% endhighlight %}

You can checkout the 
[demo page](http://f.cl.ly/items/f5433e81ff1ac3636e32/index.html).
