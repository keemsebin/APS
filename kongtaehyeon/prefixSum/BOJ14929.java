import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ14929 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];
        int[] prefixSum = new int[n + 1];

        int result = 0;
        int sumValue = 0;
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            sumValue += arr[i];
            prefixSum[i + 1] = sumValue; // 누적합 계산.
        }

        for (int i = 0; i < n; i++) {
            int standard = arr[i];
            int calculatedSum = prefixSum[n] - prefixSum[i + 1];

            result += standard * calculatedSum;
        }

        System.out.println(result);

    }
}