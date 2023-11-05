```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Threading;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Security.Principal;
using System.Security.AccessControl;
using System.Security.Cryptography;
using System.Net;
//system.io is letterbox
//system is home

    public class Home
    { 
        public static string oops(string e)
        {
           throw new Exception(e); //exception: error
        }
        public static void Print(string text)
        {
            Console.WriteLine(text);
        }
        public static string ReadLine()
        { 
            var text = Console.ReadLine();
            return text;
        }
        public static string ReadKey()
        {
            var key = Console.ReadKey().ToString();
            return key;
        }
        public static int Add(int i, int v)

        {
            var add = i + v;
            return add;
        }
        public static int Subtract(int i, int v)
        {
            var subtract = i - v;
            return subtract;
        }
        public static int Multiply(int i, int v)
        {
            var multiply = i * v;
            return multiply;
        }
        public static int Divide(int i, int v)
        {
            var divide = i / v;
            return divide;
        }
        public static int Modulus(int i, int v)
        {
            var modulus = i % v;
            return modulus;
        }
        public static int Power(int i, int v)
        {
            var power = Math.Pow(i, v);
            return (int)power;
        }
        public static int SquareRoot(int i)
        {
            var squareroot = Math.Sqrt(i);
            return (int)squareroot;
        }
        
    }
        




    public class letterbox
    {
        
        
        //lib for reading and writing files
        public static string read(string filePath)
        {
            string contents = File.ReadAllText(filePath);
            return contents;
        }
        public static string write(string filePath, string contents)
        {
            File.WriteAllText(filePath, contents);
            return null;
        }
        public static string append(string a, string[] contents)
        {
            File.AppendAllLines(a, contents);
            return null;
        }
        public static string delete(string a)
        {
            File.Delete(a);
            return null;
        }
        public static string create(string filename)
        {
            File.Create(filename);
            return null;
        }
        public static string copy(string a, string b)
        {
            File.Copy(a,b);
            return null;
        }
        public static string move(string a, string b)
        {
            File.Move(a, b);
            return null;
        }
        public static string[] getfiles(string a)
        {
            var files = Directory.GetFiles(a);
            return files;
        }
        public static string[] getdirectories(string b)
        {
            var directories = Directory.GetDirectories(b);
            return directories;
        }
        public static string[] getdrives()
        {
            var drives = Directory.GetLogicalDrives();
            return drives;
        }
        public static string getcurrentdirectory()
        {
            var currentdirectory = Directory.GetCurrentDirectory();
            return currentdirectory;
        }
        public static string getparent(string a)
        {
            var parent = Directory.GetParent(a);
            return parent.FullName;
        }
        public static string getroot(string a)
        {
            var root = Directory.GetDirectoryRoot(a);
            return root;
        }
        public static string createdirectory(string a)
        {
            Directory.CreateDirectory(a);
            return null;
        }
        public static string deletedirectory(string a)
        {
            Directory.Delete(a);
            return null;
        }
        public static string movefile(string a, string b)
        {
            File.Move(a, b);
            return null;
        }
        public static string movefiles(string a, string b)
        {
            Directory.Move(a, b);
            return null;
        }
        public static string getfilename(string a)
        {
            var filename = Path.GetFileName(a);
            return filename;
        }
        public static string getfilenamewithoutextension(string a)
        {
            var filenamewithoutextension = Path.GetFileNameWithoutExtension(a);
            return filenamewithoutextension;
        }
        public static string getextension(string a)
        {
            var extension = Path.GetExtension(a);
            return extension;
        }
        public static string getfullpath(string a)
        {
            var fullpath = Path.GetFullPath(a);
            return fullpath;
        }
        public static string getinvalidfilenamechars()
        {
            var invalidfilenamechars = Path.GetInvalidFileNameChars();
            return invalidfilenamechars.ToString();
        }
        public static string getinvalidpathchars()
        {
            var invalidpathchars = Path.GetInvalidPathChars();
            return invalidpathchars.ToString();
        }
        public static string getpathroot(string obj)
        {
            var pathroot = Path.GetPathRoot(obj);
            return pathroot;
        }
        public static string getrandomfilename()
        {
            var randomfilename = Path.GetRandomFileName();
            return randomfilename;
        }
        public static string gettemppath()
        {
            var temppath = Path.GetTempPath();
            return temppath;
        }
        public static string gettempfilename()
        {
            var tempfilename = Path.GetTempFileName();
            return tempfilename;
        }
        public static string changefilename(string a, string b)
        {
            var changefilename = Path.ChangeExtension(a, b);
            return changefilename;
        }
        public static string combine(string a, string b)
        {
            var combine = Path.Combine(a, b);
            return combine;
        }
        public static string getdirectoryname(string a)
        {
            var directoryname = Path.GetDirectoryName(a);
            return directoryname;
        }
       
        
    }
```


