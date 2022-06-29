    const bubble = document.getElementById("SubBubble");

        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-EN";

        recognition.onerror = function (event) {
            //console.error(event);
        };

        recognition.onend = function () {
            recognition.start();
        };

        recognition.onresult = async function (event) {
            bubble.style.opacity = 100;

            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    bubble.innerHTML = event.results[i][0].transcript;

                    setTimeout(() => {
                        bubble.style.opacity = 0;
                    }, 2000);

                } else if (!event.results[i].isFinal) { 
                    bubble.innerHTML = event.results[i][0].transcript;
                }
            }
        };

recognition.start();