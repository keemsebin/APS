import java.io.BufferedReader;
import java.io.InputStreamReader;


public class BOJ2178 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BuffferedReader(new InputStreamReader(System.in));

        String[] nAndM = br.readLine().split(" ");
        int N = Integer.parseInt(nAndM[0]);
        int M = Integer.parseInt(nAndM[1]);

        int[][] map = new int[N][M];


        // 일단 지도를 만들고!
        for (int i = 0; i < N; i++) {
            String row = br.readLine();
            for (int j = 0; j < M; j++)
                map[i][j] = row.charAt(j);
        }

        // 탐색하자!
            // 방문한 곳은 다시 못가게!
        int[][] visited = new int[N][M];

        visited[0][0] = 1;

        // 방향
        int[] goX = {-1, 1, 0, 0};
        int[] goY = {0, 0, -1, 1};



    }



    public int go(int x, int y) {
        for (int i = 0; i < 4; i++) {
            int nextX = x + goX[i];
            int nextY = y + goY[i];

            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m)
                continue;
            if (visited[nextX][nextY] == 1 || map[nextX][nextY] == 0)
                continue;
            
        }
    }
}