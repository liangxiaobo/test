  generateData();
	/**
	 * 随机生成表达式
	 */
	function generateData(){
		// 定义一个表达式的类型，表示计算倍数
		var expression_type = [2, 3, 4];
		// 取expression_type数组的长度限制
		var expression_type_max_length = 2;
		// 随机取表达式类型
		var random_expression_index = Math.floor(Math.random() * expression_type_max_length);

		// 生成表达式的最大值
		var expression_max_value = 5;
		// 生成表达式的最小值
		var expression_min_value = 1;

		var expression_arr = [], expression_str = "";

		for (var i = 0; i < expression_type[random_expression_index]; i++) {
			var item_random_value = 1 + Math.floor(Math.random() * expression_max_value);
			expression_arr.push(item_random_value);
		};

		// 组成表达式
		expression_str = expression_arr.join(' + ');
		// 输出表达式的值
		expression_answer = eval(expression_str);
		console.log(expression_str, expression_answer);

		/**
		 * 生成四个JSON格式的选项
		 * @value  选项的值 
		 * @isAnswer 是否是答案
		 */
		var options = [{value: expression_answer, isAnswer: true}];
		// 生成四个选项值
		for(var i = 1; i < 4; i++){
			var option_json_obj = {};

			if (expression_answer - 4 >= 0) {
				option_json_obj.value = expression_answer - i;
			}else{
				option_json_obj.value = expression_answer + i;
			}

			option_json_obj.isAnswer = false;
			options.push(option_json_obj);
		}

		// 将数组乱序
		function shuffle(o){
			for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		};

		// 乱序的第二种方法
		// var a = options.sort(function(){
		//   return Math.random()-0.5;
		// });

		console.log("generate options , ", JSON.stringify(shuffle(options)));

	}
