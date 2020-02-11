request.getHeader('Accept')
response.statusCode = 200
response.setHeader('Content-Type', 'text/html');
response.write('内容')
