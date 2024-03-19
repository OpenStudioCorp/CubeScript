# Home.dll

within Home, there are 2 classes that contain the basic functions for CubeScript.

## Class: Home

### Function: oops(string e)

```cs

try {
    // some code
} grab (Exception e) {
    oops(e.ToString()); // prints the error
}

```

### Function: Print(string text)

```cs

Print("Hello World!");

```

### Function: ReadLine()

```cs

Print("What is your name?");
string name = ReadLine();
Print("Hello " + name + "!");

```

### Function: ReadKey()

```cs

Print("Press any key to continue...");
var key = ReadKey();
Print("You pressed " + key);

```

### Function: Add(int i, int v)

```cs

int somenumber = 1;
int anothernumber = 2;
int result = Add(somenumber, anothernumber);
Print(result); // 3

```

### Function: Subtract(int i, int v)

```cs

int somenumber = 1;
int anothernumber = 2;
int resul = Subtract(somenumber, anothernumber);
Print(result); // -1

```

### Function: Multiply(int i, int v)

```cs

int somenumber = 1;
int anothernumber = 2;
int result = Multiply(somenumber, anothernumber);
Print(result); // 2

```

### Function: Divide(int i, int v)

```cs

int somenumber = 1;
int anothernumber = 2;
int result = Divide(somenumber, anothernumber);
Print(result); // 0.5

```

### Function: Modulus(int i, int v)

```cs

int somenumber = 1;
int anothernumber = 2;
int result = Modulus(somenumber, anothernumber);
Print(result); // 1

```

### Function: Power(int i, int v)

```cs

int somenumber = 1;
int anothernumber = 2;
int result = Power(somenumber, anothernumber);
Print(result); // 1

```

### Function: SquareRoot(int i)

```cs

int somenumber = 4;
int result = SquareRoot(somenumber);
Print(result); // 2

```


## Class: letterbox

### Function: Read(string file)

```cs

string text = Read("file.txt");
Print(text);

```

### Function: Write(string file, string contents)

```cs

Write("file.txt", "Hello World!");

```

### Function: Append(string file, string[] contents)

```cs

Append("file.txt", "Hello World!");

``` 

### Function: Delete(string file)

```cs

Delete("file.txt");

```

### Function: create(string file)

```cs

create("file.txt");

```

### Function: copy(string file, string newfile)

```cs

copy("file.txt", "newfile.txt");

```

### Function: move(string file, string newfile)

```cs

move("file.txt", "newfile.txt");

```

### Function: getfiles[](string directory)

```cs

getfiles("C:\\Users\\User\\Desktop\\"); // returns an array of files in the directory

```

### Function: getdirectories[](string directory)

```cs

getdirectories("C:\\Users\\User\\Desktop\\"); // returns an array of directories in the directory

```

### Function: getdrives()

```cs

getdrives(); // returns an array of drives

```

### Function: getcurrentdirectory(string file)

```cs

getcurrentdirectory(); // returns the current directory

```

### Function: movefile(string file, string newfile)

```cs

movefile("file.txt", "newfile.txt");

```


if you want to browse around the code, go to [here](/docs/homelib )