# CubeScript v1.2

Welcome to the New CubeScript 1.2 update called { The Expanse }

This update Includes New ways to code, bug fixes and a whole lot more!

## most notable changes include

Using ret then a type will setup a public static "string, var, int etc"
```cs

retstring Print(string text)
{
	Console.WriteLine(text);
}
// retstring will output

public static string Print(string text)
{
	Console.WriteLine(text);
}

```

these changes bring a better coding experience and improves readability when working with a large codebase

CPC/CubeScript Project Creator 1.1

This release includes Creating a DLL Class Lib project

The next release should incorporate creating a WPF app on windows, plus a release build for Linux. still no support for MacOS unfortunately, but i'm working on it with Github actions Nuitka!!!

CSVM now requires flags to be passed to it when compiling the Code into a file.

hold on, i allmost forgot something!

CubeScript Project Creator Now Supports Compiling Multiple Files together so you can class your code better!

in your workspace should be a file with the name of your project and the extension .CSPM

reading the file ether with Nano on Linux or a Text editor on windows, the file should contain the file names plus extensions for your project.

when running -c without a file, the Compiler First checks if the file is in the folder with the name of the project and if so, will read the contents of the file and look for .cusp files with the names within the file, it will then attempt to read the contents of the files and compile them with everything else.

please note that if you do add more CUSP files to your project, please add the corrosponding  Compile include to your csproj file.

Thats all for this set of Patch notes! take care!