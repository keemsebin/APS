package TwoPointer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class BOJ1644 {
    static int N;
    static int answer;
    static int[] arr;
    static List<Integer> primeNum;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());

        arr = new int[N + 1];
        primeNum = new ArrayList<Integer>();

        findPrime();
        twoPointer();

        System.out.println(answer);

    }

    // cf) 에라토스테네스
    static void findPrime() {
        for (int i = 2; i <= N; i++) {
            if (arr[i] == 0) {
                primeNum.add(i);
                for (int j = i; j <= N; j = j + i) {
                    arr[j] = i;
                }
            }
        }
    }

    static void twoPointer() {
        int sum = 0, high = 0, low = 0;
        while (true) {
            if (sum >= N) {
                sum -= primeNum.get(low);
                low += 1;
            } else if (high == primeNum.size()) {
                break;
            } else if (sum < N) {
                sum += primeNum.get(high);
                high += 1;
            }

            if (sum == N)
                answer += 1;

        }
    }
}
