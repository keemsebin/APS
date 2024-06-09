import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ20438 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        int Q = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());


        boolean[] attend = new boolean[N + 3]; // 3 ~ N + 2 까지.
        boolean[] sleeping = new boolean[N + 3]; // 3 ~ N + 2 까지.

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < K; i++) {
            int index = Integer.parseInt(st.nextToken());
            sleeping[index] = true; // 조는 녀석들
        }

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < Q; i++) {
            int index = Integer.parseInt(st.nextToken());
            int targetIndex = index;
            int mul = 1;
            while (index <= N + 2 && !sleeping[index]) {
                if (attend[index] == false) {
                    attend[index] = true;
                }
                index = targetIndex * (++mul);
            }
        }

        st = new StringTokenizer(br.readLine());

        int[] prefix = new int[N +3];

        for (int i = 3; i < prefix.length; i++) { // 누적합으로 만들어서 정답 결과 O(N) 으로 개선하기.
            prefix[i] = prefix[i - 1] + ((!attend[i]) ? 1 : 0);
        }


        for (int i = 0; i < M; i++) {
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());




            System.out.println(prefix[end] - prefix[start - 1]);
        }


    }
}
