import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;


public class BOJ16236 {

    static int[] dx = {1,-1,0,0};
    static int[] dy = {0, 0, 1, -1};

    static int size = 2;
    static int time = 0;

    static int currentX;
    static int currentY;

    static int N;


    static int[][] map;
    static boolean[][] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());

        int startX = 0, startY = 0;

        map = new int[N][N];


        for (int i = 0; i < N; i++) {
            String[] row = br.readLine().split(" ");
            for (int j = 0; j < N; j++) {
                map[i][j] = Integer.parseInt(row[j]);
                if (map[i][j] == 9) {
                    startX = i;
                    startY = j;
                }
            }
        }

        move(startX, startY);

        System.out.println(time);
    }

    public static void move(int x, int y) {

         currentX = x;
         currentY = y;
        int eating = 0;

        while (true) {
            Queue<Fish> queue = new LinkedList<>();
            List<Fish> fishList = new ArrayList<>();
            visited = new boolean[N][N];

            visited[currentX][currentY] = true;
            queue.add(new Fish(currentX, currentY, 0));


            while (!queue.isEmpty()) {
                Fish fish = queue.poll();
                int move = fish.move;

                for (int i = 0; i < 4; i ++) {
                    int nextX = fish.x + dx[i];
                    int nextY = fish.y + dy[i];

                    if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
                    if (visited[nextX][nextY]) continue;

                    visited[nextX][nextY] = true;

                    if (map[nextX][nextY] <= size) {
                        if (map[nextX][nextY] != 0 && map[nextX][nextY] < size)
                            fishList.add(new Fish(nextX, nextY, move + 1));
                        queue.add(new Fish(nextX, nextY, move + 1));
                    }
                }

            }

            if (fishList.isEmpty()) break;
            else {
                if (fishList.size() > 1) sort(fishList);

                Fish fish = fishList.get(0);
                time += fish.move;
                eating++;

                map[currentX][currentY] = 0;
                currentX = fish.x;
                currentY = fish.y;
                map[currentX][currentY] = 9;

                if (size == eating) {
                    size++;
                    eating = 0;
                }

            }
        }
    }

    static void sort(List<Fish> list) {
        list.sort(new Comparator<Fish>() {
            @Override
            public int compare(Fish o1, Fish o2) {
                // 1. 거리 , 2. 위 , 3, 왼쪽
                if (o1.move == o2.move) {
                    if (o1.x == o2.x) {
                        // 가장 왼쪽
                        return o1.y - o2.y;
                    } else {
                        // 가장 위
                        return o1.x - o2.x;
                    }
                } else {
                    // 가장 가까운 곳
                    return o1.move - o2.move;
                }
            }
        });
    }
}

 class Fish {
    int x;
    int y;
    int move;

    public Fish(int x, int y, int move) {
        this.x =x;
        this.y = y;
        this.move = move;
    }
}
