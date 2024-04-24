#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {

	// input
	string input;
	getline(cin, input);

	// parsing
	bool tag = false;
	vector<char> word;

	for (int i = 0; i < input.size(); i++) {

		// TAG
		if (input[i] == '<') {
			
			if (word.size() != 0) {
				reverse(word.begin(), word.end());
				for (int i = 0; i < word.size(); i++) {
					cout << word[i];
				}
				word.clear();
			}
			tag = true;
			cout << input[i];
			continue;
		}
		else if (input[i] == '>') {
			tag = false;			
			cout << input[i];
			continue;
		}
		else if(tag == true) {			
			cout << input[i];
			continue;
		}
		

		// WORD
		else if (input[i] == ' ' || input[i] == '<') {
			if (word.size() != 0) {
				reverse(word.begin(), word.end());
				for (int i = 0; i < word.size(); i++) {
					cout << word[i];
				}
				word.clear();
				cout << " ";
				continue;
			}
			
		}		
		word.push_back(input[i]);
	}

    // last WORD
	if (word.size() != 0) {
		reverse(word.begin(), word.end());
		for (int i = 0; i < word.size(); i++) {
			cout << word[i];
		}
	}
}