import java.util.Scanner;
import java.util.ArrayList;

public class BOJ1167 {

    static int N;
    static int max;
    static int node;
    static ArrayList<Node>[] list;
    static boolean[] visited;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        N = scan.nextInt();
        list = new ArrayList[N + 1];

        for (int i = 1; i < N + 1; i++) {
            list[i] = new ArrayList<>();
        }

        for (int i = 0; i < N; i++) {
            int s = scan.nextInt();

            while (true) {
                int e = scan.nextInt();
                if (e == -1) break;
                int cost = scan.nextInt();
                list[s].add(new Node(e, cost));
            }
        }
        visited = new boolean[N + 1];
        dfs(1,0);

        visited = new boolean[N + 1];
        dfs(node, 0);

        System.out.println(max);

    }

    public static void dfs(int x, int len) {
        if (len > max) {
            max = len;
            node = x;
        }
        visited[x] = true;

        for (int i = 0; i < list[x].size(); i++) {
            Node n = list[x].get(i);
            if (!visited[n.e]) {
                dfs(n.e, n.cost + len);
                visited[n.e] = true;
            }
        }
    }
    public static class Node {
        int e;
        int cost;

        public Node(int e, int cost) {
            this.e = e;
            this.cost = cost;
        }
    }
}
