# CubeScript Version 1.2.1

This Release improves the usage with the compiler and adds some new features.

## New Features

added an update checker and a way to update the compiler to the latest version without having to keep redownloading the compiler.

added a new way to define functions that you can call.

```cs
restring Print(string text)
{
    Console.WriteLine(text);
}
// restring will output

public static string Print(string text)
{
    Console.WriteLine(text);
}

```

in total, you have access to restring, reint, rebool and revoid.

these changes bring a better coding experience and improves readability when working with a large codebase


## Bug Fixes

fixed a bug that wouldn't allow you to compile a script if you didn't remove the compile include from the csproj file.
fixed the creation of projects and updater not working on linux.


## Changes


## Known Issues

the official CubeScript Doumentation is not yet complete, and is still being worked on.

please wait while we finish the documentation.

## Download 

[Download CubeScript](https://CubeScript.vercel.app/Download) 

## Installation

### Windows

1. Download the latest version of CubeScript from the [Download](https://CubeScript.vercel.app/Download) page.

2. Extract the zip file to a folder.

3. Within the folder should be a libs folder, a CSVM.exe file, and a CSVMUpdater.exe file.
