package TwoPointer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ2230 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(arr); // 오름차순 정렬.

        int start = 0;
        int end = 0;

        int result = Integer.MAX_VALUE;

        while (start <= end && end < n) {
            if (arr[end] - arr[start] >= m) {
                if (arr[end] - arr[start] < result) result = arr[end] - arr[start];
                start++;
            } else end++;
        }

        System.out.println(result);

    }
}
