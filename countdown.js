

            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            var timer;

            timer = setInterval(showRemaining, 1000);

            function showRemaining() {
                var end = new Date('2018-08-17'.replace(/-/g, '/'));
                var now = new Date();
                var distance = end - now;

                if (distance < 0) {

                    clearInterval(timer);
                    $("#contagem_regressiva").hide();
                    $("#eventos #carrossel").css("margin-bottom", '-40px');
                    return;
                }
                var days = Math.floor(distance / _day);
                var hours = Math.floor((distance % _day) / _hour);
                var minutes = Math.floor((distance % _hour) / _minute);
                var seconds = Math.floor((distance % _minute) / _second);

                var d = days.toString() + 'd ';
                d += hours.toString() + 'h ';
                d += minutes.toString() + 'm ';
                d += seconds.toString() + 's ';

                $("#countdown").text(d);
            }
