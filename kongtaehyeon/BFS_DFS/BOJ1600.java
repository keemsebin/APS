import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class BOJ1600 {


    // 대각선 까지 포함하는 것!
    static int[] dx = {0,0,1,-1};
    static int[] dy = {1,-1,0,0};

    static int[] nightX = {1,1, 2,2, -1, -1, -2, -2};
    static int[] nightY = {2,-2,-1,1, 2, -2, 1, -1};

    static int W;
    static int H;


    static int K;

    static int[][] map;  // 지도!
    static boolean[][][] visited; // 방문했는지 ! (마지막은 말을 사용한 횟수)
    static int[][] time;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        K = Integer.parseInt(br.readLine());

        String[] line = br.readLine().split(" ");
        W = Integer.parseInt(line[0]);
        H = Integer.parseInt(line[1]);

        map = new int[H][W];
        visited = new boolean[H][W][K + 1];
        time = new int[H][W];
        // 지도에 값을 넣어주자!

        for (int i = 0; i < H; i++) {
            String str = (br.readLine());
            String[] row = str.split(" ");
            for (int j = 0; j < W; j++) {
                map[i][j] = Integer.parseInt(row[j]);
            }
        }

        visited[0][0][0] = true;
        go(0,0);

    }


    public static void go(int x, int y) {
        Queue<int[]> queue = new LinkedList<>();

        queue.add(new int[] {x,y, 0});


        while (!queue.isEmpty()) {
            int[] now = queue.poll();
            int nowX = now[0];
            int nowY = now[1];
            int horse = now[2];

            if (nowX == W-1 && nowY == H-1) {
                System.out.println(time[nowY][nowX] );
                return;
            }

            for (int i = 0; i < 4; i++) {
                int nextX= nowX + dx[i];
                int nextY = nowY + dy[i];



                if (nextX < 0 || nextY < 0 || nextX >= W || nextY >= H) continue;
                if (visited[nextY][nextX][horse] || map[nextY][nextX] == 1) continue;
                queue.add(new int[] {nextX, nextY, horse});

                visited[nextY][nextX][horse] = true;
                time[nextY][nextX] = time[nowY][nowX] + 1;
            }

            if (horse < K) { // 나이트처럼 이동.
                for (int i = 0; i < 8; i++) {

                    int nextX = nowX + nightX[i];
                    int nextY = nowY + nightY[i];



                    if (nextX < 0 || nextY < 0 || nextX >= W || nextY >= H) continue;
                    if (visited[nextY][nextX][horse + 1] || map[nextY][nextX] == 1) continue;

                    queue.add(new int[] {nextX, nextY, horse + 1});
                    visited[nextY][nextX][horse + 1] = true;
                    time[nextY][nextX] = time[nowY][nowX] + 1;
                }

            }
        }
        System.out.println(-1);


    }
}
