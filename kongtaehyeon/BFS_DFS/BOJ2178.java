import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class BOJ2178 {
    static int[][] map;
    static int N;
    static int M;
    static int[][] visited;
    static int[] goX = {-1, 1, 0,0};
    static int[] goY = {0, 0, -1, 1};
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nAndM = br.readLine().split(" ");
        N = Integer.parseInt(nAndM[0]);
        M = Integer.parseInt(nAndM[1]);

        map = new int[N][M];


        // 일단 지도를 만들고!
        for (int i = 0; i < N; i++) {
            String row = br.readLine();
            for (int j = 0; j < M; j++)
                map[i][j] = row.charAt(j) - '0';
        }

        // 탐색하자!
        // 방문한 곳은 다시 못가게!
        visited = new int[N][M];
        visited[0][0] = 1;

        go(0,0);

        System.out.println(map[N-1][M-1]);




    }



    public static void go(int x, int y) {
        // 이 방식으로 찾는 건, 최단 거리를 보장하는게 아니였음 . . .!

//        for (int i = 0; i < 4; i++) {
//            int nextX = x + goX[i];
//            int nextY = y + goY[i];
//
//            if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M)
//                continue;
//            if (visited[nextX][nextY] == 1 || map[nextX][nextY] == 0)
//                continue;
//
//            map[nextX][nextY] = map[x][y] + 1; // 도착 횟수.
//            visited[nextX][nextY] = 1; // 체크!
//            go(nextX, nextY); // 재귀로 반복.
//
//        }

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] {x,y});

        while (!queue.isEmpty()) {
            int[] now = queue.poll();
            int nowX = now[0];
            int nowY = now[1];

            for (int i = 0; i < 4; i++) {
                int nextX = nowX +goX[i];
                int nextY = nowY +goY[i];

                if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M)
                    continue;
                if (visited[nextX][nextY] == 1 || map[nextX][nextY] == 0)
                    continue;
                queue.add(new int[] {nextX, nextY});
                map[nextX][nextY] = map[nowX][nowY] + 1;
                visited[nextX][nextY] = 1;
            }
        }

    }
}

