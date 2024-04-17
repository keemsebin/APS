import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.util.Queue;
import java.util.LinkedList;

public class BOJ1697 {



    static int[] visited = new int[100001];
    static int[] time = new int[100001];

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int M = Integer.parseInt(input[1]);
        time[N] = 0;
        visited[N] = 1;
        search(N, M);

        System.out.println(time[M]);
    }


    public static void search(int N, int M) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(N);

        while (!queue.isEmpty()) {
            int now = queue.poll();


            if (now == M) return;



            for (int i = 0; i < 3; i++) {
                int next;
                if (i == 0) next = now - 1;
                else if (i == 1) next = now + 1;
                else  next = now * 2;




                if (next < 0 || next > 100000) continue;
                if (visited[next] == 1) continue;

                queue.add(next);
                visited[next] = 1;
                time[next] = time[now] + 1;
            }
        }
    }
}