import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class BOJ1749 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int[][] matrix = new int[n + 1][m + 1];
        int[][] prefix = new int[n + 1][m + 1];

        for (int i = 1; i <= n; i++) { // 행렬 만들고!
            st = new StringTokenizer(br.readLine());
            for (int j = 1; j <= m; j++) {

                matrix[i][j] = Integer.parseInt(st.nextToken());
                // (1,1) ~ (i,j) 해당 좌표까지의 누적합.
                prefix[i][j] = prefix[i][j- 1] + prefix[i - 1][j] - prefix[i -1][j - 1] + matrix[i][j];

            }
        }

        int answer = Integer.MIN_VALUE;

        for (int rowStart = 1; rowStart <= n; rowStart++) {
            for (int rowEnd = rowStart; rowEnd <= n; rowEnd++) {
                for (int colStart = 1; colStart <= m; colStart++) {
                    for (int colEnd = colStart; colEnd <= m; colEnd++) {
                        answer = Math.max(answer , prefix[rowEnd][colEnd] - prefix[rowStart - 1][colEnd] - prefix[rowEnd][colStart - 1] + prefix[rowStart - 1][colStart - 1] );
                    }
                }
            }
        }
        System.out.println(answer);


    }
}
