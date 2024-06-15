import java.io.BufferedReader;
import java.io.InputStreamReader;


public class Main {
    private static int min = Integer.MAX_VALUE;
    private static int max = Integer.MIN_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        cut(N, 0);

        System.out.println(min + " " + max);

    }

    private static void cut(int n, int cnt) {
        cnt += countOddNumber(n);

        if (n / 10 == 0) { // 1 자리수인 경우. (종료시점)
            min = Integer.min(min, cnt); // 많은 결과 중에 가장 작은 홀수 갯수.
            max = Integer.max(max, cnt); // 그 반대.
        }
        else if (n / 100 == 0) { // 2 자리수인 경우.
            int next = n / 10;
            next += n % 10;
            cut(next, cnt);
        }
        else { // 수를 3분할.
            String str = String.valueOf(n);
            for (int i = 0; i < str.length() - 2; i++) {
                for (int j = i + 1; j < str.length() - 1; j++) {
                    int next = Integer.parseInt(str.substring(0, i + 1));
                    next += Integer.parseInt(str.substring(i + 1, j + 1));
                    next += Integer.parseInt(str.substring(j+1));

                    cut(next, cnt);
                }
            }
        }
    }

    public static int countOddNumber(int n) {
        int cnt = 0;
        while (n > 0) {
            int tmp = n % 10;
            if (tmp % 2 == 1) cnt++;
            n = n / 10;
        }
        return cnt;
    }
}