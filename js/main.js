(function($){
    var S = {
        config: {
            div_no: 150,
            sleep_time: 30
        },
        dimension: {
            width: 1500,
            height: 650
        },
        fly_flag: false,
        path_i: 0,
        paths: [
            [100,600],
            [200,500],
            [300,400],
            [400,300],
            [500,200],
            [600,100],
            [700,100],
            [800,100],
            [500,200],
            [100,300]
        ],
        color_codes: {
            1: '#02611b',
            2: '#2c7c16',
            3: '#75ac0d',
            4: '#bbd506',
            5: '#f2ea01',
            6: '#ffdc01',
            7: '#ffab06',
            8: '#fa660d',
            9: '#a8cb08',
            10: '#e10119'
        },
        data: [],
        init: function() {
            S.fly_flag = false;
            S.path_no = 0;

            //S.gotoPlane(0,0); return false;

            S.initData();
            S.initMap();
            S.initPlane();
            S.startPlane();

        },
        initMap: function() {
            $('#map').width(S.dimension.width);
            $('#map').height(S.dimension.height);
        },
        initPlane: function() {
            var x = S.paths[S.path_i][0];
            var y = S.paths[S.path_i][1];

            S.gotoPlane(x,y);
        },
        initData: function() {
            S.data = [
                {
                    xy: [100, 600],
                    latitude: -12,
                    longitude: 100,
                    city: 1,
                    eco: 1,
                    you: 1
                },
                {
                    xy: [200, 500],
                    latitude: -12,
                    longitude: 100,
                    city: 2,
                    eco: 2,
                    you: 2
                },
                {
                    xy: [300, 400],
                    latitude: -12,
                    longitude: 100,
                    city: 3,
                    eco: 3,
                    you: 3
                },
                {
                    xy: [400, 300],
                    latitude: -12,
                    longitude: 100,
                    city: 4,
                    eco: 4,
                    you: 4
                },
                {
                    xy: [500, 200],
                    latitude: -12,
                    longitude: 100,
                    city: 5,
                    eco: 5,
                    you: 5
                },
                {
                    xy: [600, 100],
                    latitude: -12,
                    longitude: 100,
                    city: 6,
                    eco: 6,
                    you: 6
                },
                {
                    xy: [700, 100],
                    latitude: -12,
                    longitude: 100,
                    city: 7,
                    eco: 7,
                    you: 7
                },
                {
                    xy: [800, 100],
                    latitude: -12,
                    longitude: 100,
                    city: 8,
                    eco: 8,
                    you: 8
                },
                {
                    xy: [500, 200],
                    latitude: -12,
                    longitude: 100,
                    city: 9,
                    eco: 9,
                    you: 9
                },
                {
                    xy: [100, 300],
                    latitude: -12,
                    longitude: 100,
                    city: 10,
                    eco: 10,
                    you: 10
                }
            ];
        },
        getData: function(x, y) {
            for (var i = 0; i < S.data.length; i++) {
                if (S.data[i].xy[0] == x && S.data[i].xy[1] == y) {
                    return S.data[i];
                }
            }
        },
        getPlaneXY: function() {
            var position = $('#plane').position();
            return {x: position.left, y: position.top};
        },
        startPlane: function() {
            S.fly_flag = true;
            S.nextMove();
        },
        stopPlane: function() {
            S.fly_flag = false;
        },
        changIconColor: function(x, y) {
            var data = S.getData(x, y);
            $('#city').css('background-color', S.color_codes[data.city]);
            $('#eco').css('background-color', S.color_codes[data.eco]);
            $('#you').css('background-color', S.color_codes[data.you]);
        },
        gotoPlane: function(x,y) {
            $('#plane').css({left: x, top: y});
        },
        nextMove: function() {
            ++S.path_i;
            var x = S.paths[S.path_i][0];
            var y = S.paths[S.path_i][1];

            S.movePlane(x,y);
            S.changIconColor(x,y);
        },
        movePlane: function(to_x, to_y) {
            // set from & to
            var fr_xy = S.getPlaneXY();
            var fr_x = fr_xy.x;
            var fr_y = fr_xy.y;

            // how much at one step
            var inc_x = (to_x - fr_x) / S.config.div_no;
            var inc_y = (to_y - fr_y) / S.config.div_no;

            // where to start
            var curr_x = fr_x;
            var curr_y = fr_y;

            // build path
            var arr_path = [];
            for (var i = 0; i < S.config.div_no; i++) {
                curr_x += inc_x;
                curr_y += inc_y;
                arr_path.push([curr_x, curr_y]);
            }
            arr_path.push([to_x, to_y]);

            var i = 0;
            setTimeout(nextStep, S.config.sleep_time);

            // next step
            function nextStep() {
                S.gotoPlane(arr_path[i][0], arr_path[i][1]);

                if (i < arr_path.length - 1) {
                    // next step
                    i++;
                    setTimeout(nextStep, S.config.sleep_time);
                }else if (S.fly_flag) {
                    // next move
                    if (S.path_i < S.paths.length - 1) {
                        S.nextMove();
                    }else {
                        S.stopPlane();
                    }
                }
            }
        }
    };

    $( document ).ready(function() {
        S.init();
    });
})(jQuery)