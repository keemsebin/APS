import java.io.*;
import java.util.*;

public class BOJ1966 {

    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int want;
    public static void main(String[] args) throws IOException {
        int Case = Integer.parseInt(br.readLine());
        for(int i=0;i<Case;i++) {
            print(br.readLine(),br.readLine());
        }
    }

    static void print(String str,String str2) {
        StringTokenizer st= new StringTokenizer(str, " ");
        StringTokenizer st2= new StringTokenizer(str2, " ");
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int max=0,cnt=0;

        Queue<Integer> qu = new LinkedList<>();	// 0~n
        Queue<Integer> qu2 = new LinkedList<>();	//우선순위 저장
        for(int i=0;i<N;i++) {
            qu.add(i);
            int n=Integer.parseInt(st2.nextToken());
            qu2.add(n);

        }

        while(!qu.isEmpty()) {
            max = Collections.max(qu2);    //우선순위 가장 높은 값 출력
            if (max != qu2.peek()) {
                qu.add(qu.poll());
                qu2.add(qu2.poll());
            } else {
                if (qu.poll() == M) {
                    qu2.poll();
                    cnt++;
                    break;
                } else {
                    qu2.poll();
                    cnt++;
                }

            }
        }
        System.out.println(cnt);
    }
}