vimeoEmbedder.js
================
Embed and extend the customization of the Vimeo player beyond its native abilities.<br>
Version: 1.0 (August 10, 2013)<br>
Author: Jason Safir (http://www.jasonsafir.com)

Overview
--------
vimeoEmbedder.js for jQuery helps artists and designers present their Vimeo videos on websites the way they want them to. The lightweight plugin is designed to help give you creative control over how your Vimeo videos are presented by configuring a set of options. In addition, vimeoEmbedder.js enables you to customize your own placeholder image for any Vimeo video. The plugin does not embed Vimeo videos when a web page loads on the fly, but rather allows the user to embed the video player on-click.

Configuration Options
---------------------

<b>vimeoID</b>
<br>Input the Video ID that is assigned to your video file at Vimeo.com. (copy the URL or ID from your web browser’s address bar while viewing the video on Vimeo.)

<b>width</b>
<br>Width of the player in pixels (defaults to 480 pixels).

<b>height</b>
<br>Height of the player in pixels (defaults to 270 pixels).

<b>vimeoColor</b>
<br>Changes the color scheme of the Vimeo player (including play button, progress bar and volume levels).

<b>image</b>
<br>URL to a JPG/PNG poster image to display before the Vimeo video is loaded and playback is started.

<b>playButtonColor</b>
<br>Sets the background color of the poster image play button.

<b>vimeoBackground</b>
<br>Assign a background color for the Vimeo player.

Usage and Options
-----------------

1) To use vimeoEmbedder.js, the first thing you should do is load the scripts and stylesheet found in the distribution within the head tag:

<pre><code>&lt;link rel=<span class="string">"stylesheet"</span> href=<span class="string">"css/vimeoEmbedder.css"</span>&gt;
&lt;script type=<span class="string">"text/javascript"</span> src=<span class="string">"js/jquery-1.10.2.min.js"</span>&gt;&lt;/script&gt;
&lt;script type=<span class="string">"text/javascript"</span> src=<span class="string">"js/jquery.vimeoEmbedder.js"</span>&gt;&lt;/script&gt;
</code></pre>

2) Next, place the following source code anywhere inside the body tag of your HTML document where you would like the Vimeo player to be displayed:

<pre><code>&lt;div id=<span class="string">"vimeoEmbedder"</span>&gt;&lt;/div&gt;</code></pre>

3) Customize and style the Vimeo player configuration options inside the jquery.vimeoEmbedder.js javascript file.

Browsers and Platforms
----------------------

vimeoEmbedder.js works reliably on Firefox, Safari, Chrome and IE.
