import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.StringTokenizer;


public class BOJ20440 {

    public static class Time {
        int s, e;
        public Time(int s, int e) {
            this.s = s;
            this.e = e;
        }
    }

    static int n;
    static Time[] times;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        times = new Time[n];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            times[i] = new Time(start, end);
        }

        Arrays.sort(times, new Comparator<Time>() {
            @Override
            public int compare(Time o1, Time o2) {
                if (o1.s == o2.e) {
                    return o1.e - o2.e;
                }
                return o1.s - o2.s;
            }
        });
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(times[0].e);

        int cnt = 1;

        int s = times[0].s;

        int e = times[0].e;

        for (int i = 1; i < n; i++) {
            while (!pq.isEmpty() && pq.peek() < times[i].s) {
                pq.poll();
            }
            if (!pq.isEmpty() && pq.peek() == times[i].s) {
                if (pq.peek() == e) {
                    e = times[i].e;
                }
                pq.poll();
            }

            pq.add(times[i].e);
            if (pq.size() > cnt) {
                cnt = pq.size();
                s = times[i].s;
                e = pq.peek();
            }
        }
        System.out.println(cnt);
        System.out.println(s + " " + e);
    }
}
