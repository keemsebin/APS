package TwoPointer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ2531 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int d = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        int c =  Integer.parseInt(st.nextToken());

        int[] menu = new int[n];
        int[] eated = new int[d + 1];

        for (int i = 0; i < n; i++) {
            menu[i] = Integer.parseInt(br.readLine());
        }

        // 구하는 건 결국 메뉴의 가짓수.
        int count = 0;

        for (int i = 0; i < k; i++) {
            if (eated[menu[i]] == 0) { // 안먹은거.
                count++;
            }
            eated[menu[i]]++;
        }

        int maxCount = count;

        for (int i = 1; i < n; i++) {
            if (maxCount <= count) {
                if (eated[c] == 0) { // 쿠폰초밥을 안먹은 상태.
                    maxCount = count + 1;
                }

                else { // 쿠폰초밥 먹은 상태.
                    maxCount = count;
                }
            }

            int end = (i + k - 1) % n; // 끝 포인트 이동.
            if (eated[menu[end]] == 0) {
                count++;
            }
            eated[menu[end]]++;

            eated[menu[i-1]]--; // 이전 초밥 제외
            if (eated[menu[i-1]] == 0) {
                count--; // 한개만 먹은거면 , , ,
            }
        }

        System.out.println(maxCount);

    }
}
