using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncAwaitTaskTutorial
{
  class Program
  {
    static void Main(string[] args) //메인 쓰레드
    {
      Console.WriteLine("응용프로그램 시작");
      
      var task = new Task(DoTasking);
      task.Start();
      task.Wait(); // 테스크 쓰레드가 끝날때까지 이 쓰레드를 Sleep 한다는 의미
      
      Console.ReadLine();
    }
    
    static async void DoTasking() {
      var task = Task.Run(() => DelayedTask()); // ()라는 함수의 반환값은 DeylaydTask()의 반환값
      // Run()은 비동기식으로 쓰레드를 작동한다는 의미
       Console.WriteLine("작업이 진행중입니다.");
       
       var res = await task; // 테스크의 ()함수 반환값이 나올때까지 기다림 즉 DelayedTask()가 return 하기 전까지는 대기
       
       Console.WriteLine($"반환값: {res}");
     }
     
     static string DelayedTask() {
      var a = string.Empty;
      
      for(int i = ; i<10; i++) {
        a +="a";
        Console.WriteLine("a working");
        System.Threading.Thread.Sleep(100);
        }
        return a;
      }
    }
  }
