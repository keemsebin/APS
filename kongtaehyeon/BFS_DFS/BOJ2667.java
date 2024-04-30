import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.List;
import java.util.ArrayList;
import java.util.Queue;

public class BOJ2667 {

    static int[][] map;
    static boolean[][] visited;

    static int count = 0;
    static int line;
    static int[] dx = {0,0,-1,1};
    static int[] dy = {1,-1,0,0};



    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        line = Integer.parseInt(br.readLine());

        map = new int[line][line];
        visited = new boolean[line][line];

        for (int i = 0; i < line; i++) {
            String row = br.readLine();

            for (int j = 0; j < line; j++) {
                map[i][j] = row.charAt(j) - '0';
            }
        }

        visited[0][0] = true;
        go(0, 0);

    }

    public static void go(int startX, int startY) {
        Queue<int[]> queue = new LinkedList<>();

        int[] xy = {startX, startY};
        queue.add(xy);

        while (!queue.isEmpty()) {
            int[] currentXY = queue.poll();
            for (int i = 0; i < 4; i++) {
                int nextX = currentXY[0] + dx[i];
                int nextY = currentXY[1] + dy[i];

                if (nextX < 0 || nextY < 0 || nextX >= line || nextY >= line) continue;
                if (visited[nextX][nextY] || map[nextX][nextY] != 1) continue;


            }
        }

    }
}
