using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Solution {
    class Solution {
        static void Main(string[] args)
        {
            string point1AsAString = "1 1";            
            string point2AsAString = "2 2";
            string pointX1 = point1AsAString.Split(' ')[0];
            string pointY1 = point1AsAString.Split(' ')[1];
            string pointX2 = point2AsAString.Split(' ')[0];
            string pointY2 = point2AsAString.Split(' ')[1];

            // Need to parse each point and find the distance between them using the supplied CalculateManhattanDistance
            
            Console.WriteLine(CalculateManhattanDistance(int.Parse(pointX1), int.Parse(pointY1), int.Parse(pointX2), int.Parse(pointY1)));
        }

        // The following method get the manhatten distance betwen two points (x1,y1) and (x2,y2)
        public static int CalculateManhattanDistance(int x1, int y1, int x2, int y2)
        {
            return Math.Abs(x1 - x2) + Math.Abs(y1 - y2);
        }
    }    
}