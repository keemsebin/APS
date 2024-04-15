import java.util.Comparator;
import java.util.PriorityQueue;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class BOJ11279 {


    static PriorityQueue<Integer> maxHeap = new PriorityQueue<>(new Comparator<Integer>() {
        @Override
        public int compare(Integer o1, Integer o2) {
            return - Integer.compare(o1, o2);
        }
    });

    public static void main(String[] args) throws Exception {


        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {
            int op = Integer.parseInt(br.readLine());

            if (op == 0) {
                if (maxHeap.isEmpty()) {
                    System.out.println(0);
                } else {
                    System.out.println(maxHeap.poll());
                }
            }
            else {
                maxHeap.add(op);
            }
        }
    }
}
