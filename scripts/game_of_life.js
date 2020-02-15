window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let size = 5;
    let w = Math.floor(window.screen.width / size);
    let h = Math.floor(window.screen.height / size);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let grid = [];
    for (let i = 0; i < h; i++) grid[i] = [];

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            grid[i][j] = Math.floor(Math.random() * 1.3);
        }
    }

    setInterval(function () {
        // update
        let count = [];
        for (let i = 0; i < h; i++) count[i] = [];

        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                let cnt = 0;
                for (let di = -1; di <= 1; di++) {
                    for (let dj = -1; dj <= 1; dj++) {
                        if (di == 0 && dj == 0) continue;
                        let ni = i + di, nj = j + dj;
                        if (ni < 0 || h <= ni || nj < 0 || w <= nj) continue;
                        cnt += grid[ni][nj];
                    }
                }
                count[i][j] = cnt;
                if (cnt < 2 || cnt > 3) {
                    grid[i][j] = 0;
                }
            }
        }
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                let cnt = count[i][j];
                if (grid[i][j] == 1 && (cnt < 2 || cnt > 3)) {
                    grid[i][j] = 0;
                } else if (grid[i][j] == 0 && cnt == 3) {
                    grid[i][j] = 1;
                }
            }
        }

        // draw
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#2BD5FF';
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (grid[i][j]) {
                    ctx.fillRect(j * size, i * size, size, size);
                }
            }
        }

    }, 100);
}
