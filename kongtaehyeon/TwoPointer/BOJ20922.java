package TwoPointer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ20922 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        int[] arr = new int[n];
        st = new StringTokenizer(br.readLine());


        int[] show = new int[100001]; // 1 ~ 100000


        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }


        int result = 0;
        int start = 0;
        int end = 0;

        while (end < arr.length) {
            while (end < arr.length && show[arr[end]] + 1 <= k) {
                show[arr[end]]++;
                end++;
            }

            int len = end - start;

            if (result < len) result = len;
            show[arr[start]]--;
            start++;
        }
        System.out.println(result);
    }
}
