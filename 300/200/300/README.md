# 300 - SphereGeometry

We will use ```SphereGeometry``` and add material to it. We will also add lighting to the scene to illuminate the sphere.

Our goal is to make this scene into a shot of Earth from space.

Now, we'll apply the texture to the sphere and make it transparent. We'll also create another sphere right underneath the previous one and set its color to blue. 

The scene will take a while to render everything because it has to load and apply textures to the objects.

Here is the source code:

```
<html lang="en">
<link type="text/css" rel="stylesheet" id="dark-mode-custom-link">
<link type="text/css" rel="stylesheet" id="dark-mode-general-link">
<style lang="en" type="text/css" id="dark-mode-custom-style"></style>
<style lang="en" type="text/css" id="dark-mode-native-style"></style>
<style lang="en" type="text/css" id="dark-mode-native-sheet"></style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Sphere</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.min.js"></script>
    <script defer="defer" src="js/sphere.js"></script>
    <link href="css/sphere.css" rel="stylesheet">
    <style type="text/css">
        .dg ul {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            clear: both
        }

        .dg.ac {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 0;
            z-index: 0
        }

        .dg:not(.ac) .main {
            overflow: hidden
        }

        .dg.main {
            -webkit-transition: opacity .1s linear;
            -o-transition: opacity .1s linear;
            -moz-transition: opacity .1s linear;
            transition: opacity .1s linear
        }

        .dg.main.taller-than-window {
            overflow-y: auto
        }

        .dg.main.taller-than-window .close-button {
            opacity: 1;
            margin-top: -1px;
            border-top: 1px solid #2c2c2c
        }

        .dg.main ul.closed .close-button {
            opacity: 1 !important
        }

        .dg.main:hover .close-button,
        .dg.main .close-button.drag {
            opacity: 1
        }

        .dg.main .close-button {
            -webkit-transition: opacity .1s linear;
            -o-transition: opacity .1s linear;
            -moz-transition: opacity .1s linear;
            transition: opacity .1s linear;
            border: 0;
            line-height: 19px;
            height: 20px;
            cursor: pointer;
            text-align: center;
            background-color: #000
        }

        .dg.main .close-button.close-top {
            position: relative
        }

        .dg.main .close-button.close-bottom {
            position: absolute
        }

        .dg.main .close-button:hover {
            background-color: #111
        }

        .dg.a {
            float: right;
            margin-right: 15px;
            overflow-y: visible
        }

        .dg.a.has-save>ul.close-top {
            margin-top: 0
        }

        .dg.a.has-save>ul.close-bottom {
            margin-top: 27px
        }

        .dg.a.has-save>ul.closed {
            margin-top: 0
        }

        .dg.a .save-row {
            top: 0;
            z-index: 1002
        }

        .dg.a .save-row.close-top {
            position: relative
        }

        .dg.a .save-row.close-bottom {
            position: fixed
        }

        .dg li {
            -webkit-transition: height .1s ease-out;
            -o-transition: height .1s ease-out;
            -moz-transition: height .1s ease-out;
            transition: height .1s ease-out;
            -webkit-transition: overflow .1s linear;
            -o-transition: overflow .1s linear;
            -moz-transition: overflow .1s linear;
            transition: overflow .1s linear
        }

        .dg li:not(.folder) {
            cursor: auto;
            height: 27px;
            line-height: 27px;
            padding: 0 4px 0 5px
        }

        .dg li.folder {
            padding: 0;
            border-left: 4px solid rgba(0, 0, 0, 0)
        }

        .dg li.title {
            cursor: pointer;
            margin-left: -4px
        }

        .dg .closed li:not(.title),
        .dg .closed ul li,
        .dg .closed ul li>* {
            height: 0;
            overflow: hidden;
            border: 0
        }

        .dg .cr {
            clear: both;
            padding-left: 3px;
            height: 27px;
            overflow: hidden
        }

        .dg .property-name {
            cursor: default;
            float: left;
            clear: left;
            width: 40%;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .dg .c {
            float: left;
            width: 60%;
            position: relative
        }

        .dg .c input[type=text] {
            border: 0;
            margin-top: 4px;
            padding: 3px;
            width: 100%;
            float: right
        }

        .dg .has-slider input[type=text] {
            width: 30%;
            margin-left: 0
        }

        .dg .slider {
            float: left;
            width: 66%;
            margin-left: -5px;
            margin-right: 0;
            height: 19px;
            margin-top: 4px
        }

        .dg .slider-fg {
            height: 100%
        }

        .dg .c input[type=checkbox] {
            margin-top: 7px
        }

        .dg .c select {
            margin-top: 5px
        }

        .dg .cr.function,
        .dg .cr.function .property-name,
        .dg .cr.function *,
        .dg .cr.boolean,
        .dg .cr.boolean * {
            cursor: pointer
        }

        .dg .cr.color {
            overflow: visible
        }

        .dg .selector {
            display: none;
            position: absolute;
            margin-left: -9px;
            margin-top: 23px;
            z-index: 10
        }

        .dg .c:hover .selector,
        .dg .selector.drag {
            display: block
        }

        .dg li.save-row {
            padding: 0
        }

        .dg li.save-row .button {
            display: inline-block;
            padding: 0px 6px
        }

        .dg.dialogue {
            background-color: #222;
            width: 460px;
            padding: 15px;
            font-size: 13px;
            line-height: 15px
        }

        #dg-new-constructor {
            padding: 10px;
            color: #222;
            font-family: Monaco, monospace;
            font-size: 10px;
            border: 0;
            resize: none;
            box-shadow: inset 1px 1px 1px #888;
            word-wrap: break-word;
            margin: 12px 0;
            display: block;
            width: 440px;
            overflow-y: scroll;
            height: 100px;
            position: relative
        }

        #dg-local-explain {
            display: none;
            font-size: 11px;
            line-height: 17px;
            border-radius: 3px;
            background-color: #333;
            padding: 8px;
            margin-top: 10px
        }

        #dg-local-explain code {
            font-size: 10px
        }

        #dat-gui-save-locally {
            display: none
        }

        .dg {
            color: #eee;
            font: 11px 'Lucida Grande', sans-serif;
            text-shadow: 0 -1px 0 #111
        }

        .dg.main::-webkit-scrollbar {
            width: 5px;
            background: #1a1a1a
        }

        .dg.main::-webkit-scrollbar-corner {
            height: 0;
            display: none
        }

        .dg.main::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: #676767
        }

        .dg li:not(.folder) {
            background: #1a1a1a;
            border-bottom: 1px solid #2c2c2c
        }

        .dg li.save-row {
            line-height: 25px;
            background: #dad5cb;
            border: 0
        }

        .dg li.save-row select {
            margin-left: 5px;
            width: 108px
        }

        .dg li.save-row .button {
            margin-left: 5px;
            margin-top: 1px;
            border-radius: 2px;
            font-size: 9px;
            line-height: 7px;
            padding: 4px 4px 5px 4px;
            background: #c5bdad;
            color: #fff;
            text-shadow: 0 1px 0 #b0a58f;
            box-shadow: 0 -1px 0 #b0a58f;
            cursor: pointer
        }

        .dg li.save-row .button.gears {
            background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;
            height: 7px;
            width: 8px
        }

        .dg li.save-row .button:hover {
            background-color: #bab19e;
            box-shadow: 0 -1px 0 #b0a58f
        }

        .dg li.folder {
            border-bottom: 0
        }

        .dg li.title {
            padding-left: 16px;
            background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;
            cursor: pointer;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
        }

        .dg .closed li.title {
            background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)
        }

        .dg .cr.boolean {
            border-left: 3px solid #806787
        }

        .dg .cr.color {
            border-left: 3px solid
        }

        .dg .cr.function {
            border-left: 3px solid #e61d5f
        }

        .dg .cr.number {
            border-left: 3px solid #2FA1D6
        }

        .dg .cr.number input[type=text] {
            color: #2FA1D6
        }

        .dg .cr.string {
            border-left: 3px solid #1ed36f
        }

        .dg .cr.string input[type=text] {
            color: #1ed36f
        }

        .dg .cr.function:hover,
        .dg .cr.boolean:hover {
            background: #111
        }

        .dg .c input[type=text] {
            background: #303030;
            outline: none
        }

        .dg .c input[type=text]:hover {
            background: #3c3c3c
        }

        .dg .c input[type=text]:focus {
            background: #494949;
            color: #fff
        }

        .dg .c .slider {
            background: #303030;
            cursor: ew-resize
        }

        .dg .c .slider-fg {
            background: #2FA1D6;
            max-width: 100%
        }

        .dg .c .slider:hover {
            background: #3c3c3c
        }

        .dg .c .slider:hover .slider-fg {
            background: #44abda
        }
    </style>
    <style type="text/css">
        .dg ul {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            clear: both
        }

        .dg.ac {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 0;
            z-index: 0
        }

        .dg:not(.ac) .main {
            overflow: hidden
        }

        .dg.main {
            -webkit-transition: opacity .1s linear;
            -o-transition: opacity .1s linear;
            -moz-transition: opacity .1s linear;
            transition: opacity .1s linear
        }

        .dg.main.taller-than-window {
            overflow-y: auto
        }

        .dg.main.taller-than-window .close-button {
            opacity: 1;
            margin-top: -1px;
            border-top: 1px solid #2c2c2c
        }

        .dg.main ul.closed .close-button {
            opacity: 1 !important
        }

        .dg.main:hover .close-button,
        .dg.main .close-button.drag {
            opacity: 1
        }

        .dg.main .close-button {
            -webkit-transition: opacity .1s linear;
            -o-transition: opacity .1s linear;
            -moz-transition: opacity .1s linear;
            transition: opacity .1s linear;
            border: 0;
            line-height: 19px;
            height: 20px;
            cursor: pointer;
            text-align: center;
            background-color: #000
        }

        .dg.main .close-button.close-top {
            position: relative
        }

        .dg.main .close-button.close-bottom {
            position: absolute
        }

        .dg.main .close-button:hover {
            background-color: #111
        }

        .dg.a {
            float: right;
            margin-right: 15px;
            overflow-y: visible
        }

        .dg.a.has-save>ul.close-top {
            margin-top: 0
        }

        .dg.a.has-save>ul.close-bottom {
            margin-top: 27px
        }

        .dg.a.has-save>ul.closed {
            margin-top: 0
        }

        .dg.a .save-row {
            top: 0;
            z-index: 1002
        }

        .dg.a .save-row.close-top {
            position: relative
        }

        .dg.a .save-row.close-bottom {
            position: fixed
        }

        .dg li {
            -webkit-transition: height .1s ease-out;
            -o-transition: height .1s ease-out;
            -moz-transition: height .1s ease-out;
            transition: height .1s ease-out;
            -webkit-transition: overflow .1s linear;
            -o-transition: overflow .1s linear;
            -moz-transition: overflow .1s linear;
            transition: overflow .1s linear
        }

        .dg li:not(.folder) {
            cursor: auto;
            height: 27px;
            line-height: 27px;
            padding: 0 4px 0 5px
        }

        .dg li.folder {
            padding: 0;
            border-left: 4px solid rgba(0, 0, 0, 0)
        }

        .dg li.title {
            cursor: pointer;
            margin-left: -4px
        }

        .dg .closed li:not(.title),
        .dg .closed ul li,
        .dg .closed ul li>* {
            height: 0;
            overflow: hidden;
            border: 0
        }

        .dg .cr {
            clear: both;
            padding-left: 3px;
            height: 27px;
            overflow: hidden
        }

        .dg .property-name {
            cursor: default;
            float: left;
            clear: left;
            width: 40%;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .dg .c {
            float: left;
            width: 60%;
            position: relative
        }

        .dg .c input[type=text] {
            border: 0;
            margin-top: 4px;
            padding: 3px;
            width: 100%;
            float: right
        }

        .dg .has-slider input[type=text] {
            width: 30%;
            margin-left: 0
        }

        .dg .slider {
            float: left;
            width: 66%;
            margin-left: -5px;
            margin-right: 0;
            height: 19px;
            margin-top: 4px
        }

        .dg .slider-fg {
            height: 100%
        }

        .dg .c input[type=checkbox] {
            margin-top: 7px
        }

        .dg .c select {
            margin-top: 5px
        }

        .dg .cr.function,
        .dg .cr.function .property-name,
        .dg .cr.function *,
        .dg .cr.boolean,
        .dg .cr.boolean * {
            cursor: pointer
        }

        .dg .cr.color {
            overflow: visible
        }

        .dg .selector {
            display: none;
            position: absolute;
            margin-left: -9px;
            margin-top: 23px;
            z-index: 10
        }

        .dg .c:hover .selector,
        .dg .selector.drag {
            display: block
        }

        .dg li.save-row {
            padding: 0
        }

        .dg li.save-row .button {
            display: inline-block;
            padding: 0px 6px
        }

        .dg.dialogue {
            background-color: #222;
            width: 460px;
            padding: 15px;
            font-size: 13px;
            line-height: 15px
        }

        #dg-new-constructor {
            padding: 10px;
            color: #222;
            font-family: Monaco, monospace;
            font-size: 10px;
            border: 0;
            resize: none;
            box-shadow: inset 1px 1px 1px #888;
            word-wrap: break-word;
            margin: 12px 0;
            display: block;
            width: 440px;
            overflow-y: scroll;
            height: 100px;
            position: relative
        }

        #dg-local-explain {
            display: none;
            font-size: 11px;
            line-height: 17px;
            border-radius: 3px;
            background-color: #333;
            padding: 8px;
            margin-top: 10px
        }

        #dg-local-explain code {
            font-size: 10px
        }

        #dat-gui-save-locally {
            display: none
        }

        .dg {
            color: #eee;
            font: 11px 'Lucida Grande', sans-serif;
            text-shadow: 0 -1px 0 #111
        }

        .dg.main::-webkit-scrollbar {
            width: 5px;
            background: #1a1a1a
        }

        .dg.main::-webkit-scrollbar-corner {
            height: 0;
            display: none
        }

        .dg.main::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: #676767
        }

        .dg li:not(.folder) {
            background: #1a1a1a;
            border-bottom: 1px solid #2c2c2c
        }

        .dg li.save-row {
            line-height: 25px;
            background: #dad5cb;
            border: 0
        }

        .dg li.save-row select {
            margin-left: 5px;
            width: 108px
        }

        .dg li.save-row .button {
            margin-left: 5px;
            margin-top: 1px;
            border-radius: 2px;
            font-size: 9px;
            line-height: 7px;
            padding: 4px 4px 5px 4px;
            background: #c5bdad;
            color: #fff;
            text-shadow: 0 1px 0 #b0a58f;
            box-shadow: 0 -1px 0 #b0a58f;
            cursor: pointer
        }

        .dg li.save-row .button.gears {
            background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;
            height: 7px;
            width: 8px
        }

        .dg li.save-row .button:hover {
            background-color: #bab19e;
            box-shadow: 0 -1px 0 #b0a58f
        }

        .dg li.folder {
            border-bottom: 0
        }

        .dg li.title {
            padding-left: 16px;
            background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;
            cursor: pointer;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
        }

        .dg .closed li.title {
            background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)
        }

        .dg .cr.boolean {
            border-left: 3px solid #806787
        }

        .dg .cr.color {
            border-left: 3px solid
        }

        .dg .cr.function {
            border-left: 3px solid #e61d5f
        }

        .dg .cr.number {
            border-left: 3px solid #2FA1D6
        }

        .dg .cr.number input[type=text] {
            color: #2FA1D6
        }

        .dg .cr.string {
            border-left: 3px solid #1ed36f
        }

        .dg .cr.string input[type=text] {
            color: #1ed36f
        }

        .dg .cr.function:hover,
        .dg .cr.boolean:hover {
            background: #111
        }

        .dg .c input[type=text] {
            background: #303030;
            outline: none
        }

        .dg .c input[type=text]:hover {
            background: #3c3c3c
        }

        .dg .c input[type=text]:focus {
            background: #494949;
            color: #fff
        }

        .dg .c .slider {
            background: #303030;
            cursor: ew-resize
        }

        .dg .c .slider-fg {
            background: #2FA1D6;
            max-width: 100%
        }

        .dg .c .slider:hover {
            background: #3c3c3c
        }

        .dg .c .slider:hover .slider-fg {
            background: #44abda
        }
    </style>
    <style type="text/css">
        @font-face {
            font-weight: 400;
            font-style: normal;
            font-family: circular;

            src: url('chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Book.woff2') format('woff2');
        }

        @font-face {
            font-weight: 700;
            font-style: normal;
            font-family: circular;

            src: url('chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Bold.woff2') format('woff2');
        }
    </style>
</head>

<body>
    <canvas class="webgl" width="1819" height="459" style="width: 1819px; height: 459px;"></canvas><scribe-shadow
        id="crxjs-ext"
        style="position: fixed; width: 0px; height: 0px; top: 0px; left: 0px; z-index: 2147483647; overflow: visible;"></scribe-shadow>
    <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
        <section id="shadow-host-companion"></section>
    </div>
</body>

</html>
```
sphere.html

```
import * as THREE from 'three'

// Loading textures
const loader = new THREE.TextureLoader();
const earth = loader.load('images/earth.png')
const backgroup = loader.load('images/background.png')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = background;

// Objects
const geometry_one = new THREE.SphereGeometry( 1, 36, 16 );
const geometry_two = new THREE.SphereGeometry(0.99, 36, 16);

// Materials
//For the outer sphere
const material_one = new THREE.MeshPhongMaterial()
material_one.color = new THREE.Color(0x00ff00)
material_one.map = earth;
material_one.transparent = true;
```
js/sphere.js

Lines 4–6: This code loads required textures using the TextureLoader object's load method. One is to apply to the scene and the other to Earth.

Line 15: This code applies the texture to the scene background. We can invoke the background property and set it to the loaded texture.

Lines 28–29: This code applies the texture to the material of the shape. We use the simple map property. In the following line, we make the material layer transparent using the transparent method. Therefore, only the texture shows up and does not obscure the cube beneath.