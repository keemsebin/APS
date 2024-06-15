import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ21318 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());

        int[] arr = new int[n + 1]; // 악보!
        boolean[] flag = new boolean[n + 1];
        int[] mistake = new int[n + 1];

        st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int q = Integer.parseInt(br.readLine());

        // 이렇게 하니까 n^2 느낌 (최악의 경우)
//        for (int i = 1; i <= q; i++) {
//            st = new StringTokenizer(br.readLine());
//
//            int x = Integer.parseInt(st.nextToken());
//            int y = Integer.parseInt(st.nextToken());
//
//            int mistake1 = 0;
//            int currentSongIdx;
//
//            for (currentSongIdx = x; currentSongIdx < y; currentSongIdx++) {
//                if (arr[currentSongIdx] > arr[currentSongIdx + 1]) mistake1++;
//            }
//            System.out.println(mistake);
//        }

        // 전체를 한번 다 돌려서, n 으로 줄이는 방법으로 해보자!
        int miss = 0;
        for (int i = 1; i < n; i++) {

            if (arr[i] > arr[i+1]) miss++;
            mistake[i+1] = miss;
        }

        for (int i = 1; i <= q; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            System.out.println(mistake[y] - mistake[x]);
        }
    }
}
