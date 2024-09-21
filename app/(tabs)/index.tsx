import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoListApp: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.text}
      </Text>
      <View style={styles.taskButton}>
        <TouchableOpacity onPress={() => toggleComplete(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>
            {item.completed ? 'Undo' : 'Complete'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <Text style={styles.name}>2124801030017 - Nguyễn Minh Khôi</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter a new task"
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem:
  {
    backgroundColor: "#78B7D0",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  taskText:
  {
    fontSize: 20,
    marginBottom: 5,
    color:'white'
   
  },
  completedTask:
  {
    textDecorationLine: "line-through",
    color:'gray'
  },
  taskButton:
  {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button:
  {
    padding: 5,
    borderRadius: 4,
    marginLeft: 10,
    backgroundColor: "#FFDC7F",
  },
  buttonText:
  {
    
  },
  container:
  {
     
  },
  title:
  {
    textAlign: "center",
    marginBottom:10,
    fontFamily:'monospace',
    fontWeight:'bold',
    fontSize:30
  },
  name:
  {
    textAlign: "center",
    marginBottom:20,
    fontSize:30,
    fontWeight:'bold'
  },
  inputContainer:
  {
    flexDirection: "row",
    marginBottom: 20,
  },
  input:
  {
    flex: 1,
    borderWidth: 1,
    borderColor: "#78B7D0",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: "#7C00FE",
  },
  addButton:
  {
    backgroundColor: "#FFDC7F",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  addButtonText:
  {
    fontWeight:'bold'
  },
  list:
  {
  
  }
});



export default TodoListApp;