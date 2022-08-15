const vision = require("@google-cloud/vision");

// Creates a client
const IMAGE = `${__dirname}/../public/example1.jpg`;
const CREDENTIALS = {
  type: "service_account",
  project_id: "graceful-path-359505",
  private_key_id: "1062d00bd9083a28c72281d4e01c79b72d01bfa7",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC7+XmePFfhm5LP\nAVepcSX8CpPvSvoZfbhL78cL+9Xt9TwkOVyLanhjyRLV4oHKffUcp3o7xnPmXmED\n3qy7voisPONknMWe+KuHc2F8wJ4jdzTHOJA0+i+H635xkXaOljUMz/7Z2q8wsvhV\ne5yKInkSb97lgWqLw6G9/CSZ8HHsWx/7aCq7+IWepLS7+Dh4q8DpBLXy2mZ7Nriy\njTVTnwgger/pXmZFkuUBQ/3XkJTzmBX+cvRHMLEZLQ6GtbaSkVcJ/Bf6a+uRG5ao\nkGzuaJ4owFblv74NenDhgF3zqOqVMASJsjz6c2tR4N8BAgqZ022SkZlC+7E8/t75\nTxr+1nvLAgMBAAECggEAE05VIl5aPE6pLl+Z7Eo1t4Qym3Ic679QzWPMErwDxdPZ\nIHNPwPXndYAyUgtYfz6ejRnaYQdJ4hAxcJ9PKF0yVlZOmIfNeD1cCKZeDd0OoN/e\naNOzY+2KMjCKpQlmntBolG9MYn2mXp8TCFyQwFM4Eh+xSesX0VD/bK7X54Odf8PS\npCbCKXPrRq6I4Z3TZo40tR+n9aNwq/tcskjgywiax8EnFLWHzzVVd3HXEqqByrYH\nwkeuBty4aHK8DtcMaG0QPclS7LDBdLLcZCNFivejcKNGs6if3pLBjIW/sLrJ04pt\nE0GTIpqaXpfEsvxrqdBpyM1trsRtKCdmQQH0k0O62QKBgQD9unJom8pr8IlBzvOy\nsmYz17Mzg9u30zSpNPY0cafloPEXxe0ndLEQwUJtTeuMdrRSs0s1w2p4QmwkrLsi\n9Dqc0nYuZIITcw2hII/gpQdDSXO8VAJ62mIIGglrpbevevMLnJrY6crhX86bsJU4\nJCWjsgK4hQjtQtEXrkJy4sEpjQKBgQC9qFGFHN49yeDlDpynYZNHzAvn7rHEjBcu\nWUjXu/5Kwu9JhIRuq97f+PyjfzOZ9KmN9aPywF7WjiSnnTxwuWZ8V8qmJw85nd8P\nnzcPuDOV9wrobN9420qbsdm/gyHama1WHniz0D2Nltzt+jzgN/yIOVtmnFKwBqHq\na49HHgLotwKBgDwxy4q9yxwoiKewLWirokuSVNVX5vyJgujRw8dVX3u+3vPA5S6D\nJK7Q6q172vIMB2PHXYR3w/6b44Qf5pW4U195HsiK18E9fnJHg1rMTBjOiEKZu6zh\nungplSqQui9Lf/W1RZdIf/VQAXg2QHB9QuC/Dp4wEZoYS/rOQL14xlLRAoGAaRYP\nfVs+hSwL0b9j65a0Pa8A1dU7aLVaztKn+ulugEw8vBaSLqRKzP0wNwNvOxoGrOLz\nobkXk3iVNM55w9fmwnT+k0vHMtyX0RceMjaVVr3YrGpO9K9FSrmj9mqZYn+OPM6L\ngM6cnIyAA9iIzJAY+/4T9+ocIu653qMUc4pcgEcCgYBEkC00cv7T6JN1dEHCqDcd\nKrazsaSidMyj8EQ9ikCwjxdhocW7g9fRZjI2CtJvpyYYQvXkHVZscGKh1cP4F7WE\nxhe4wjokn41DeBc4zeqGPqfWhkIXTwJTSqgvnEjaczlNoMjp3j4Xgz75MlUj/gzH\nvhhzazzKKfxLsRphJtG0/w==\n-----END PRIVATE KEY-----\n",
  client_email: "img-search-music@graceful-path-359505.iam.gserviceaccount.com",
  client_id: "108046832172766577722",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/img-search-music%40graceful-path-359505.iam.gserviceaccount.com",
};

// console.log(CREDENTIALS.client_email);
const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const identifyAlbum = async (img_url) => {
  const [result] = await client.webDetection(img_url);
  return result.webDetection.bestGuessLabels;
};

module.exports = {
  identifyAlbum,
};
