const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000

app.use(cors())

const exercise = {
    'bench':{
        'type': 'chest',
        'origin': 'Yo mama house',
        'reps': 8,
        'weight': 45,
        'compound': true,
        'exercise-link': 'https://www.youtube.com/watch?v=rT7DgCr-3pg'
    },
    'squat':{
        'type': 'quads',
        'origin': 'Yo mama house',
        'reps': 10,
        'weight': 100,
        'compound': true,
        'exercise-link': 'https://www.youtube.com/watch?v=SW_C1A-rejs'
    },
    'deadlift':{
        'type': 'back',
        'origin': 'Yo mama house',
        'reps': 5,
        'weight': 135,
        'compound': true,
        'exercise-link': 'https://www.youtube.com/watch?v=7Q_GnXm7LbI'
    },
    'shoulder':{
        'type': 'shoulders',
        'origin': 'Yo mama house',
        'reps': 6,
        'weight': 45,
        'compound': true,
        'exercise-link': 'https://www.youtube.com/watch?v=2yjwXTZQDDI'
    },
    'sprints':{
        'type': 'cardio',
        'origin': 'Yo mama house',
        'reps': 50,
        'weight': 0,
        'compound': true,
        'exercise-link': 'https://www.youtube.com/watch?v=bSfy6jcgpWY'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'reps': 0,
        'weight': 0,
        'compound': false,
        'exercise-link': 'https://www.youtube.com/watch?v=bSfy6jcgpWY'
},
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const exerciseName = request.params.name.toLowerCase()
    if( exercise[exerciseName] ){
        response.json(exercise[exerciseName])
    }else{
        response.json(exercise['unknown'])
    }
 
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})

