var  env = process.env.NODE_ENV || 'development'
console.log("ENV ",env)
if(env ==='development'){
    process.env.PORT=3000
    process.env.MONGODB_URI = 'mongodb://josephtrop:P)o9I*u7@ds151963.mlab.com:51963/nytreact'
}

