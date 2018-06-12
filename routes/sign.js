var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: "AWS_ACCESS_KEY",
  secretAccessKey: "AWS_SECRET_KEY",
});
var s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: 'us-west-1'
});
var endpoint = '';

module.exports = app => {
  app.get('/api/upload/:file', (req, res) => {
    endpoint = req.params.file
    var params = {
     Bucket: 'phxonboard-uploaded-csv',
     Key: `${endpoint}`,
    };
    var url = s3.getSignedUrl('putObject', params)
      console.log(url);
      res.send(url);
    });
}
