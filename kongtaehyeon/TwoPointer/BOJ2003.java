package TwoPointer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ2003 {



    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int[] arr = new int[n];
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int first = 0;
        int second = 0;

        int sum = 0;
        int result = 0;

        while(true) {
            if (sum >= m) { // 합이 커서 이전 인덱스를 앞으로 이동.
                sum -= arr[first];
                first++;
            } else if (second == n) break;

            else { // 합이 작아서 이후 인덱스를 앞으로 이동.
                sum += arr[second];
                second++;
            }

            if (sum == m) result++;
        }
        System.out.println(result);
    }
}

