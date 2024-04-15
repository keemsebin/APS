import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BOJ2075 {


    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] table = new int[N * N];
        int idx = 0;

        // 일단 리스트에 담아보자.
        for (int i = 0; i < N; i++) {
            String[] rowList = br.readLine().split(" ");

            for (int j = 0; j < N; j++) {
                int e = Integer.parseInt(rowList[j]);
                table[idx++] = e;
            }
        }

        // 정렬
        Arrays.sort(table);
        System.out.println(table[N*N - N]);
    }
}
