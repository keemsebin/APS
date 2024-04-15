import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import java.util.ArrayList;


public class BOJ14425 {

    static List<String> set = new ArrayList<>();

    public static void main(String[] args) throws Exception {

        int count = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] lineOne = br.readLine().split(" ");

        int N = Integer.parseInt(lineOne[0]);
        int M = Integer.parseInt(lineOne[1]);

        for (int i = 0; i < N; i++) {
            set.add(br.readLine());
        }

        for (int i = 0; i < M; i++) {
            String target = br.readLine();

            for (int j = 0; j < N; j++) {

                if (target.equals(set.get(j))) {
                    count++;
                    break;
                }

            }

        }

        System.out.println(count);

        // 왜 시간 초과가 안나지??
        // 그냥 이렇게 푸는게 맞는걸까? => 다른 사람 풀이 보기!

    }
}
