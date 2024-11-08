body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
}

#container {
    text-align: center;
}

h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.alert {
    background-color: gray;
    border-radius: 25px;
    padding: 10px 20px;
    display: inline-block;
    font-size: 1.5em;
    animation: fadeIn 0.5s ease-in-out;
}

.hidden {
    display: none;
}

.balloon {
    background: linear-gradient(to right, purple, pink);
    padding: 20px;
    border-radius: 15px;
    position: relative;
    margin: 20px 0;
    display: inline-block;
}

.dots {
    font-size: 2em;
    animation: typing 1s steps(5, end) infinite;
}

.poem {
    font-size: 1.5em;
    margin-top: 20px;
}

.enter-button {
    font-size: 5em;
    margin-top: 20px;
    cursor: pointer;
    animation: bounce 1s infinite;
}

.enter-alert {
    font-size: 1.2em;
    margin-top: 10px;
}

.final-text {
    font-size: 2em;
    margin-top: 20px;
    animation: heartBeat 1s infinite;
}

.double-click {
    font-size: 1.2em;
    margin-top: 10px;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes typing {
    from { width: 0; }
    to { width: 1.5em; }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}

@keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}
