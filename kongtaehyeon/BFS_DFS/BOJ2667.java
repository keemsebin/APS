import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class BOJ2667 {

    static int[][] map;
    static boolean[][] visited;
    static int line;
    static int[] dx = {0,0,-1,1};
    static int[] dy = {1,-1,0,0};

    static List<Integer> result;
    static int count;



    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        result = new LinkedList<>();
        line = Integer.parseInt(br.readLine());

        map = new int[line][line];
        visited = new boolean[line][line];
        count = 1;




        for (int i = 0; i < line; i++) {
            String row = br.readLine();

            for (int j = 0; j < line; j++) {
                map[i][j] = row.charAt(j) - '0';
            }
        }

        for (int x = 0; x < line; x++) {
            for (int y = 0; y < line; y++) {
                if (map[x][y] == 1 && !visited[x][y]) {
                    dfs(x,y);
                    result.add(count);
                    count = 1;
                }
            }
        }


        Collections.sort(result);
        System.out.println(result.size());
        for (Integer integer : result) {
            System.out.println(integer);
        }


    }

    public static void dfs(int x, int y) {
        visited[x][y] = true;

        for (int i = 0; i < 4; i++) {
            int nextX = dx[i] + x;
            int nextY = dy[i] + y;

            if (nextX >= 0 && nextY >= 0 && nextX < line && nextY < line && !visited[nextX][nextY] && map[nextX][nextY] == 1) {
                count++;
                dfs(nextX, nextY);
            }
        }
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
