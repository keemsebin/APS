import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ2606 {

    static int[][] virusMap;

    static boolean[] visited;

    static int computerNum;
    static int count = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        computerNum = Integer.parseInt(br.readLine());

        virusMap = new int[computerNum + 1][computerNum + 1];
        visited = new boolean[computerNum + 1];

        int connectNum = Integer.parseInt(br.readLine());

        for (int i = 0; i < connectNum; i++) {
            String[] computers = br.readLine().split(" ");
            int left = Integer.parseInt(computers[0]);
            int right = Integer.parseInt(computers[1]);

            virusMap[left][right] = virusMap[right][left] = 1;
        }

        go(0);
        System.out.println(count);


    }

    public static void go(int start) {
        visited[start] = true;

        for (int i = 1; i <= computerNum; i++) {
            if (virusMap[start][i] == 1 && visited[i] == false) {
                count++;
                go(i);
            }
        }

    }

}
