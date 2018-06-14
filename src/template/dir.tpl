<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
    body {
      margin: 30px;
    }

    li {
      list-style: none;
    }

    li > a {
      text-decoration: none;
      display: block;
      font-size: 30px;
    }
  </style>
</head>


<body>
<ul>
  {{#each files}}
  <li><a href="{{../dir}}/{{file}}">【{{icon}}】{{file}}</a></li>
  {{/each}}
</ul>
</body>
</html>
