# Clustering Bear :) Bones 
Testing clustering, using Round Robin static load balancing technique 

## Installation

1. Clone this repo: `git clone https://github.com/PChadx/ClusteringBearBones`
2. Run `npm install` in the root folder
3. Run `npm start`
4. Go to `localhost:3000` and `localhost:3000/timer` and test blocking requests

## Update
Using pm2 in CLI install pm2 globally `npm install pm2 -g`
The PM2 tool (Process Manager 2) takes advange of the cluster module in our server.js

Usage: 
`pm2 start server.js -i {number of workers}` to start N workers or `max` for maimum amount of workers to take 
`pm2 stop {id}` or instead of id just `server.js`
`pm2 list` - for list of processes
`pm2 logs` for real-time view of logs
advange fully of the CPU 

A lot more information on this to explore here: `https://github.com/Unitech/pm2`

# License

MIT — use for any legal purpose.

# Special Thanks ❤️ 

To the guys and gals @Unitech for building PM2, a really awesome production process manager for Node.js 